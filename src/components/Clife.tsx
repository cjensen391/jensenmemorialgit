import React from 'react';
import church from '../media/church.jpeg';
import golf from '../media/golf.jpeg'
export default function Clife(){
    return <div>
        <h1>Gallery</h1>
        <section className="dark:bg-gray-900">
            <div className="container px-2 py-5 mx-auto animate-pulse">
                <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700">
                    <img src={church} className="rounded px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 mx-auto" alt="...">
                </img>
                  </h1>

                <p className="w-40 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-40 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

                <div
                    className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 className="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">
                            <img src={golf} className="rounded px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 mx-auto" alt="...">
                        </img></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 className="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 className="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 className="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 className="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 className="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 className="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                        <h1 className="w-40 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
};