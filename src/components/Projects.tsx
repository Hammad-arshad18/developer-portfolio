import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Folder, Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const PAGE_SIZE = 6;

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  updated_at: string;
  language: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const GITHUB_USERNAME = 'Hammad-arshad18';

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const perPage = 100;
        const allRepos: (GitHubRepo & { fork: boolean })[] = [];

        for (let page = 1; ; page++) {
          const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${perPage}&page=${page}`
          );

          if (!response.ok) throw new Error('Failed to fetch repositories');

          const data: (GitHubRepo & { fork: boolean })[] = await response.json();
          allRepos.push(...data);

          if (data.length < perPage) break;
        }

        const filteredRepos = allRepos.filter((repo) => !repo.fork);
        setRepos(filteredRepos);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError('Unable to load GitHub repositories at the moment.');
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  const visibleRepos = repos.slice(0, visibleCount);
  const allVisible = visibleCount >= repos.length;

  return (
    <motion.section 
      id="projects" 
      className="py-24 bg-background"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 flex items-center">
            <span className="text-primary font-mono text-xl mr-3">03.5.</span> 
            Real-Time GitHub Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            A live feed of my latest public repositories dynamically fetched directly from GitHub.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20 border border-border rounded-2xl bg-surface/30">
            <p className="text-red-400 font-mono">{error}</p>
          </div>
        ) : repos.length === 0 ? (
          <div className="text-center py-20 border border-border rounded-2xl bg-surface/30">
            <p className="text-gray-400 font-mono">No public repositories found for this user.</p>
          </div>
        ) : (
          <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % PAGE_SIZE) * 0.1 }}
                className="bg-surface/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-colors interactive-hover flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex space-x-3">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="GitHub Repository">
                      <Github className="w-5 h-5" />
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="group">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors mb-2">
                    {repo.name}
                  </h3>
                </a>
                
                <p className="text-gray-400 font-light text-sm mb-6 flex-grow">
                  {repo.description || 'No description provided.'}
                </p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-gray-500 mt-auto pt-4 border-t border-border/50">
                  {repo.language && <span>{repo.language}</span>}
                  {repo.topics?.slice(0, 3).map(topic => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {repos.length > PAGE_SIZE && (
            <div className="mt-12 flex flex-col items-center gap-3">
              <p className="text-gray-500 font-mono text-sm">
                Showing {visibleRepos.length} of {repos.length}
              </p>
              <div className="flex gap-4">
                {!allVisible && (
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-colors interactive-hover"
                  >
                    Load More <ChevronDown className="w-4 h-4" />
                  </button>
                )}
                {!allVisible && (
                  <button
                    onClick={() => setVisibleCount(repos.length)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-300 border border-border hover:border-primary/50 hover:text-white rounded-full transition-colors interactive-hover"
                  >
                    Show All
                  </button>
                )}
                {allVisible && repos.length > PAGE_SIZE && (
                  <button
                    onClick={() => setVisibleCount(PAGE_SIZE)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-300 border border-border hover:border-primary/50 hover:text-white rounded-full transition-colors interactive-hover"
                  >
                    Show Less <ChevronUp className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
          </>
        )}

      </div>
    </motion.section>
  );
}
