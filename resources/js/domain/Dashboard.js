import React from 'react'
import Layout from '../components/Shared/Layout'
import {InertiaLink} from "@inertiajs/inertia-react";

const Dashboard = (props) => {
  return (
    <Layout  {...props}>
      <div className='container'>
          <div className="text-center">
              <InertiaLink className="btn-primary" href={props.links.create_organization}>
                  Create organization
              </InertiaLink>
          </div>

          <div className="row mv-5">
              <div className="col-4">
                  <div className="dashboard-org">
                      <div className="dashboard-org-img">
                          <img src="/assets/media/various/profile-placeholder.svg" alt="organization thumbnail"/>
                      </div>
                      <a href="#">Orga 1</a>
                  </div>
              </div>
              <div className="col-4">
                  <div className="dashboard-org">
                      <div className="dashboard-org-img">
                          <img src="/assets/media/various/profile-placeholder.svg" alt="organization thumbnail"/>
                      </div>
                      <a href="#">Orga 1</a>
                  </div>
              </div>
              <div className="col-4">
                  <div className="dashboard-org">
                      <div className="dashboard-org-img">
                        <img src="/assets/media/various/profile-placeholder.svg" alt="organization thumbnail"/>
                      </div>
                      <a href="#">Orga 1</a>
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}

export default Dashboard
