import DashboardMain from "./DashboardMain";
import { Metadata } from "next";



export const metadata: Metadata = {
    title:"Dashboard"
}
export default function Dashboard(){
    return (
        <>
          <DashboardMain />
        </>
    )
}