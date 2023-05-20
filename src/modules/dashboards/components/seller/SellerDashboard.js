import React from 'react'
import './SellerDashboard.css'
import DashboardHeader from "../../../common/components/DashboardHeader"
import SellerSideNav from '../../../common/components/SellerSideNav'
import AddItemModal from './AddItemModal'
import ItemCard from './ItemCard'

export default function SellerDashboard() {
  return (
    <div>
      <DashboardHeader />
      <div className="container-fluid">
        <div className="row">
          <SellerSideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Seller Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <AddItemModal/>
              </div>
            </div>
            <h4>Item Management</h4>
            <ItemCard />
          </main>
        </div>
      </div>
    </div>
  )
}
