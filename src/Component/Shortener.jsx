import React, { useState, useEffect } from 'react';

const getStoredLinks = () => {
  const stored = localStorage.getItem('shortenUrl');
  return stored ? JSON.parse(stored) : [];
};

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [shortenedLinks, setShortenedLinks] = useState(getStoredLinks());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('shortenUrl', JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setErrorMessage('Please add a link');
      return;
    }
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/shortenUrl');
      const data = await response.json();

      if (data.ok) {
        setShortenedLinks([
          {
            original: url,
            shortened: data.result.full_short_link,
            copied: false,
          },
          ...shortenedLinks,
        ]);
        setUrl('');
      } else {
        setErrorMessage('Failed to shorten link. Please enter a valid URL.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (index) => {
    const linkToCopy = shortenedLinks[index].shortened;
    navigator.clipboard.writeText(linkToCopy);
    setCopiedIndex(index);

    setShortenedLinks(
      shortenedLinks.map((link, i) =>
        i === index ? { ...link, copied: true } : { ...link, copied: false }
      )
    );

    setTimeout(() => {
      setCopiedIndex(null);
      setShortenedLinks(
        shortenedLinks.map((link) => ({ ...link, copied: false }))
      );
    }, 2000);
  };

  return (
    <div className="relative bg-gray-100 py-10 px-4 md:px-20">
      <div
        className="
          relative -top-20 z-10
          flex flex-col  items-start justify-center
          p-8 md:p-12
          rounded-lg
          bg-violet-950
          bg-cover bg-no-repeat
          bg-[url('/assets/images/bg-shorten-mobile.svg')]
          md:bg-[url('/assets/images/bg-shorten-desktop.svg')]
        "
      >
        <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:flex-1 md:mr-4">
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={url}
              id='shorten-link'
              onChange={(e) => setUrl(e.target.value)}
              className={`
                w-full p-4 rounded-md bg-amber-50 border-2
                ${errorMessage ? 'border-red-500 placeholder-red-500' : 'border-none'}
              `}
            />
            {errorMessage && <p className="text-red-500 text-sm mt-1 md:hidden">{errorMessage}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="
              w-full md:w-auto
              mt-4 md:mt-0
              bg-cyan-400 hover:bg-cyan-300 text-white
              px-8 py-4 rounded-md
              font-bold
            "
          >
            {loading ? 'Shortening...' : 'Shorten It!'}
          </button>
        </form>
        {errorMessage && <p className="text-red-500 text-sm mt-2 hidden md:block">{errorMessage}</p>}
      </div>

      <div className="relative -top-10 z-0">
        {shortenedLinks.map((link, index) => (
          <div
            key={index}
            className="
              flex flex-col md:flex-row items-center justify-between
              bg-white p-4 rounded-md mb-4
              shadow-sm
            "
          >
            <p className="text-gray-800 w-full md:w-auto truncate mb-2 md:mb-0">{link.original}</p>
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <a
                href={link.shortened}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 mr-4"
              >
                {link.shortened}
              </a>
              <button
                onClick={() => handleCopy(index)}
                className={`
                  w-full md:w-auto
                  px-6 py-2 rounded-md text-white
                  ${copiedIndex === index ? 'bg-violet-950' : 'bg-cyan-400 hover:bg-cyan-300'}
                `}
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ))}                                                                                                                                                                         
      </div>
    </div>
  );
};

export default Shortener;