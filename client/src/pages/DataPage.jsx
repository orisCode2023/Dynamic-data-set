import { useEffect, useState } from "react"
import { data } from "react-router"


function DataPage() {

    const [dataTable, setdataTable] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/terrorData')
            .then(res => res.json())
            .then(data => setdataTable(data.data))
    }, [])

    // function CreateHeader() {
    //     return (
    //         { dataTable && dataTable ?
    //             dataTable.map((val, ind) => {
    //                 return <p>aaa</p>

    //             }
    //     }

        function CreateHeader(){

            return(
                <>
                   {dataTable.map((val, ind) => <p key={ind}>{val}</p>)}
                </>
            )
        }


    function CreateBody() {

        return (

            dataTable && dataTable?.map((val, index) => (
                <tr key={index}>
                    <td >{val.eventid}</td>
                    <td >{val.iyear}</td>
                    <td >{val.country_txt}</td>
                    <td >{val.region_txt}</td>
                    <td >{val.city}</td>
                    <td >{val.summary}</td>
                    <td >{val.attacktype1_txt}</td>
                    <td >{val.targtype1_txt}</td>
                    <td >{val.corp1}</td>
                    <td >{val.target1}</td>
                    <td >{val.motive}</td>
                    <td >{val}</td>
                </tr>
            ))
        )
    }

    return (
        <>
            <h1>Terror Data System</h1>
            <nav>
                <label htmlFor=""> Search: </label>
                <input type="text" placeholder="search by name or country" />
                <label htmlFor=""> Year: </label>
                <input type="text" placeholder="Greator then " />
                <label htmlFor=""> Year: </label>
                <input type="text" placeholder="Smaller then" />
                <button>Filter</button>
            </nav>
            <table>
                <thead>
                    {/* <CreateHeader /> */}
                </thead>
                <tbody>
                    {/* <CreateBody /> */}
                </tbody>
            </table>
        </>
    )

}
export default DataPage