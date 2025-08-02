import React from "react";

const Tooltipbutto = () => {
    return (
        <div>
            <div class="absolute left-20 flex flex-col items-center justify-center">
                <div class="group relative flex flex-col items-center">
                    <div class="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg">
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center">
                            <div class="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-cyan-400"></div>
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-gray-400"></div>
                        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/10 backdrop-blur-md rotate-45 border-b border-r border-white/20"></div>
                    </div>

                   <div class="mt-4 w-6 h-6 rounded-full bg-white/80 shadow-lg cursor-pointer flex justify-center items-center">
                    
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>


                 <div class="absolute left-80 top-[450px] flex flex-col items-center justify-center">
                <div class="group relative flex flex-col items-center">
                    <div class="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg">
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center">
                            <div class="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-cyan-400"></div>
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-gray-400"></div>
                        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/10 backdrop-blur-md rotate-45 border-b border-r border-white/20"></div>
                    </div>

                     <div class="mt-4 w-12 h-12 rounded-full bg-white/80 shadow-lg cursor-pointer flex justify-center items-center">
                    
                    <div className="h-4 w-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>


                 <div class="absolute right-[660px] top-[570px] flex flex-col items-center justify-center">
                <div class="group relative flex flex-col items-center">
                    <div class="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg">
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center">
                            <div class="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-cyan-400"></div>
                        <div class="w-5 h-5 rounded-full border-2 border-white bg-gray-400"></div>
                        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/10 backdrop-blur-md rotate-45 border-b border-r border-white/20"></div>
                    </div>

                    <div class="mt-4 w-6 h-6 rounded-full bg-white/80 shadow-lg cursor-pointer flex justify-center items-center">
                    
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tooltipbutto;
