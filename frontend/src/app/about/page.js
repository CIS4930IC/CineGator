export default function About() {
    return (
        <div className="relative h-screen overflow-hidden bg-cover bg-no-repeat p-12 text-center bg-black">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[rgba(2, 56, 53, 0.7)]">
                <div className="flex h-full items-center justify-center">
                    <div className="text-white">
                        <h2 className="mb-12 text-4xl font-semibold">
                            About
                        </h2>
                        <h4 className="text-xl max-w-3xl">
                            Our website offers a unique and interactive movie review system that allows you to unleash your inner critic and share your thoughts with like-minded movie enthusiasts. With CineGator, you have the power to rate and review movies, browse existing reviews, and search for different movies using various filters. Join us and become a part of our passionate community of cinephiles who love nothing more than discussing the latest films.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}