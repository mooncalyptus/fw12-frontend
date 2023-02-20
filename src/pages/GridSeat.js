import React from "react";

const GridSeat = () => {
    const [selectedSeat, setSelectedSeat] = React.useState([])

    const selectSeat = (seat) => {
        console.log(seat)
        if (selectedSeat.includes(seat)) {
            setSelectedSeat([...selectedSeat.filter((exist) => exist !== seat)])
        } else {
            setSelectedSeat([
                ...selectedSeat, seat
            ])
        }
    }
    return (
        <>
            <div className="flex h-screen justify-center items-center">
                <div className="max-w-md w-full">
                    <div></div>
                    <div className="grid grid-cols-2 gap-11">
                        <div className="grid grid-rows-8 gap-3">{["A", "B", "C", "D", "E", "F", "G", " "].map((alphabet, _i) => {
                            return <div className="grid grid-cols-8 gap-4">
                                {[0, 1, 2, 3, 4, 5, 6, 7].map((index, _i) => {
                                    if (index > 0) {
                                        if (alphabet !== " ") {
                                            const seatNumber = alphabet + String(index)
                                            return <button onClick={() => selectSeat(seatNumber)} className={`w-6 h-6 bg-[#D6D8E7] hover:bg-[#8EC3B0] rounded ${selectedSeat.includes(seatNumber) ? ' bg-[#8EC3B0]' : ' '}`} />
                                        } else {
                                            return <button className="w-6 h-6" >{index}</button>
                                        }
                                    } else {
                                        return <button className="w-5 h-5" >{alphabet}</button>
                                    }
                                })}
                            </div>
                        })}</div>
                        <div className="grid grid-rows-8 gap-4">{["A", "B", "C", "D", "E", "F", "G", " "].map((alphabet, _i) => {
                            return <div className="grid grid-cols-8 gap-4">
                                {[8, 9, 10, 11, 12, 13, 14].map((index, _i) => {
                                    if (index > 0) {
                                        if (alphabet !== " ") {
                                            const seatNumber = alphabet + String(index)
                                            return <button onClick={() => selectSeat(seatNumber)} className={`w-6 h-6 bg-[#D6D8E7] hover:bg-[#8EC3B0] rounded ${selectedSeat.includes(seatNumber) ? 'bg-[#8EC3B0]' : ' '}`} />
                                        } else {
                                            return <button className="w-6 h-6" >{index}</button>
                                        }
                                    } else {
                                        return <button className="w-5 h-5" >{alphabet}</button>
                                    }
                                })}
                            </div>
                        })}</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default GridSeat;