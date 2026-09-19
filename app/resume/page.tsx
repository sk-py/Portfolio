const ResumeRoute = () => {
    const fileId = "1WQkzS4wlrubxwBggfenjiy6KTDN4zWyw";
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    return (
        <div className="lg:w-[65%] w-11/12 mx-auto mt-6 mb-4">
            {/* Aspect ratio wrapper for standard A4 document (141.42%) */}
            <div className="relative w-full h-0 pb-[125%] sm:pb-[100%] overflow-hidden rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
                <iframe
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full border-none"
                    src={embedUrl}
                    allowFullScreen
                    title="Mubashir Shaikh Resume"
                ></iframe>
            </div>

            <div className="mt-4 flex justify-center">
                <a
                    href={downloadUrl}
                    className="flex items-center gap-2 rounded-full border border-neutral-400/60 bg-neutral-100 px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
                >
                    Download Resume
                </a>
            </div>
        </div>
    )
}

export default ResumeRoute;