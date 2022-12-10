import React from "react";

function ForgotPassword(){
    return(
        <div className="grid grid-cols-3 font-mulish">
            <div className="w-[95%] bg-fixed col-span-2 relative">
            <img src={require('../assets/images/bg.png')} alt="desc"/>
            <div className="absolute w-full top-0 h-full left-0 bg-[#DEF5E5] bg-fixed opacity-80">
                <div className="border-2 border-black ml-6 mt-6 flex flex-col w-11/12">
                <div className="font-bold text-5xl ml-6">Movietify</div>
                <div className="font-bold text-5xl mt-24 ml-6">Let's reset password</div>
                <div className="text-2xl ml-6 mt-5">To be able to use your account again, please
                     complete the following steps.</div>
                     <div className="flex">
                    <div className="flex flex-col">
                        <div className="bg-zinc-400 w-9 h-9 rounded-full">
                            <div className="flex justify-center mt-2">1</div>
                        </div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                    <div></div>
                </div>
                </div>
            </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ForgotPassword