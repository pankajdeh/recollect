import Link from 'next/link'; 

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl md:text-5xl text-black font-bold mb-8 animate-pulse text-center">
                Coming Soon
            </h1>
            <p className="text-black text-base md:text-lg mb-8 text-center">
                We&apos;re working hard to bring you something amazing. Stay tuned!
            </p>

            {/* Responsive iframe */}
            <div className="w-full max-w-md">
                <div className="relative" style={{ paddingTop: '100%' }}>
                    <iframe
                        src="https://giphy.com/embed/3oKIPnAiaMCws8nOsE"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <Link href="/" className="mt-8 text-blue-600 hover:text-blue-800 text-lg">
                Go back to the homepage
            </Link>
        </div>
    );
}