import { useEffect, useState } from 'react';

interface StreakData {
    currentStreak: number;
    longestStreak: number;
    totalContributions: number;
}

export function GitHubStreaks({ username }: { username: string }) {
    const [streakData, setStreakData] = useState<StreakData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGitHubData() {
            try {
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
                const data = await response.json();

                const contributions = data.contributions;
                let currentStreak = 0;
                let longestStreak = 0;
                let tempStreak = 0;
                let totalContributions = 0;

                const today = new Date();
                today.setHours(0, 0, 0, 0);

                for (let i = contributions.length - 1; i >= 0; i--) {
                    const contrib = contributions[i];
                    totalContributions += contrib.count;

                    if (contrib.count > 0) {
                        tempStreak++;
                        if (tempStreak > longestStreak) {
                            longestStreak = tempStreak;
                        }
                    } else {
                        if (i === contributions.length - 1 || currentStreak === 0) {
                            currentStreak = tempStreak;
                        }
                        tempStreak = 0;
                    }
                }

                if (currentStreak === 0 && tempStreak > 0) {
                    currentStreak = tempStreak;
                }

                setStreakData({
                    currentStreak,
                    longestStreak,
                    totalContributions
                });
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchGitHubData();
    }, [username]);

    if (loading) {
        return (
            <div className="inline-flex items-baseline gap-2 py-2">
                <div className="relative w-3 h-3">
                    <div className="absolute inset-0 border border-white/20 rounded-full"></div>
                    <div className="absolute inset-0 border border-white/40 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <span className="text-white/30 text-sm font-light">—</span>
                <span className="text-white/40 text-sm font-light">streak</span>
            </div>
        );
    }

    if (!streakData) {
        return null;
    }

    return (
        <div className="inline-flex items-baseline gap-2 ">
            <span className="text-white/90 text-2xl font-light">
                {streakData.currentStreak}
            </span>
            <span className="text-white/40 text-sm font-light">
                day streak
            </span>
        </div>
    );
}

