import React from "react"
import './AdminDashboard.css'
import DashboardHeader from "../../../common/components/DashboardHeader"
import AdminSideNav from "../../../common/components/AdminSideNav"
import OrderCard from "./OrderCard"

export default function AdminDashboard() {

  return (
    <div>
      <DashboardHeader />
      <div className="container-fluid">
        <div className="row">
        <AdminSideNav/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Admin Dashboard</h1>
            </div>
            <h4>Order Management</h4>
            <OrderCard />
          </main>
        </div>
      </div>
    </div>
  )
}