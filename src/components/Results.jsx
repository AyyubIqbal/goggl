import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
    const { getResult, results, searchTerm, isLoading } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === '/videos') {
                getResult(`/search/q${searchTerm} videos`);
            }
            else {
                getResult(`${location.pathname}/q=${searchTerm}&num=30`)
            }
        }
    }, [searchTerm, location.pathname])

    if (isLoading) return <Loading />
    console.log(location.pathname);

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results?.map(({ link, title, description }, index) => (
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={link} target="_blank" rel="noreferrer">

                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                                <p className="text-sm">
                                    {link?.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p>
                                    {description?.substring(0, 100)}
                                </p>

                            </a>
                        </div>
                    ))}
                </div>
            )
        case '/images':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.image_results?.map(({ image, link: { href, title } }, index) => (
                        <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading="lazy" />
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            )
        case '/news':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                    {results?.entries?.map(({ links, id, source, title }) => (
                        <div key={id} className="md:w-2/5 w-full">
                            <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">

                                <p className="text-lg dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                                <div className="flex gap-4">

                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            )
        case '/videos':
            return 'SEARCH';

        default:
            return 'ERROR!';
    }
};

export default Results;