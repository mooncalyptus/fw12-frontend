import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function CharacterGrid({data}){
    return(
        <div>
            <img src={"http://localhost:8888/uploads/".concat(data.picture)} className="w-40 rounded" alt={data.title}/>
            <div>{data.title}</div>
        </div>
    )
}
function Homepage(){
    const [nowShowing, setNowShowing] = React.useState([])
    React.useEffect(()=> {
        getNowShowing().then((data)=> {
            setNowShowing(data.results);
        });
    },[]);

    const getNowShowing = async ()=> {
        const {data} = await axios.get("http://localhost:8888/movies/nowShowing");
        return data;
    }
        return(
            <div className="font-mulish">
                <div className="bg-white flex">
                <div className="flex items-center grow mx-32">
                <img src={require('../assets/images/logo.png')} className="w-32" alt="desc"/>
                <div className="mx-20">Home</div>
                <div className="mx-3">List Movie</div>
                </div>
                <div className="mr-32">
                <>
                <Link to="/homepage"><button type="button" className="text-black bg-[#9ED5C5] hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 w-30">Sign In</button> </Link>
                </>
                </div>
                </div>
    
                <div className="grid grid-cols-2 my-12">
                    <div className="grid content-center justify-center">
                        <div className="text-[#A0A3BD] text-2xl">Nearest Cinema, Newest Movie, </div>
                        <div className="text-[#9ED5C5] text-5xl font-bold">Find out now!</div>
                    </div>
                    <div className="grid justify-center content-center">
                    <img src={require('../assets/images/header.png')} alt="desc"/>
                    </div>
                </div>
    
                <div className="bg-[#F5F6F8] flex flex-col">
                    <div className="mx-32 my-16">
                        <div className="text-[#9ED5C5] text-2xl font-bold">Now Showing</div>
                        <hr class="w-48 h-1 bg-[#8EC3B0] rounded"></hr>
                    </div>
                    <div className="ml-28 grid grid-cols-4 grid-rows-2">
                        {nowShowing?.map((items)=> {
                            return(
                                <React.Fragment key={String(items.id)}>
                                <CharacterGrid data={items} />
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }




export default Homepage;
