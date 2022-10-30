import React, {useMemo, useRef} from 'react'
import Layout from '../components/Shared/Layout'
import {InertiaLink} from "@inertiajs/inertia-react";
import {route} from "../utils";
import {CATEGORIES} from "../components/Shared/Constants";
import {DataTable} from "../components";

export default function Dashboard(props) {
    const tableRef = useRef()
    const {events, links} = props;


    const columns = useMemo(() => [
        {
            id: 'id',
            Header: 'ID',
            accessor: 'id',
            name: 'id',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: false,
            disableFilters: true
        },
        {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            name: 'name',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true,
            Cell: ({value, row}) => {
                console.log(row)
                return (
                    <InertiaLink className={`bold-font`}
                                 href={route(links.show_event,
                                     {event: row.original.id})}
                    >
                        {value}
                    </InertiaLink>
                )
            }
        },
        {
            id: 'date',
            Header: 'Date',
            accessor: 'date',
            name: 'date',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true
        },
        {
            id: 'organization_name',
            Header: 'Organization',
            accessor: 'organization_name',
            name: 'organization_name',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true,
            Cell: ({value, row}) => {
                return (
                    <InertiaLink className={`bold-font`}
                                 href={route(links.show_organization,
                                     {organization: row.original.organization.id})}
                    >
                        {value}
                    </InertiaLink>
                )
            }
        },
        {
            id: 'place',
            Header: 'Place',
            accessor: 'place',
            name: 'place',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true
        },
        {
            id: 'category_id',
            Header: 'Category',
            accessor: 'category_id',
            name: 'category_id',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true,
            Cell: ({value}) => {
                return CATEGORIES[value]
            }
        }], [])


    return (<Layout  {...props}>


        <div className="container-data-header">
            <div className="rt-dash-title pending">
                <h5>Welcome to your SportDi Dashboard</h5>
            </div>
            <div className="container-data-header-buttons">

                <InertiaLink
                    className={'btn-tertiary-xs'}
                    href={props.links.all_organizations}>See all organizations
                </InertiaLink>
            </div>
        </div>

        <div className="dashboard-header">
            <div className='container'>
                {props.organizations.length !== 0 &&
                    <div className="row mv-5">
                        {props.organizations.map((organization) => (<>
                            <div className="col-4">
                                <div className="dashboard-org">
                                    <div key={`organization-${organization.id}`} className="dashboard-org-img">
                                        <img src={organization.logo_url}
                                             alt="organization thumbnail"/>
                                    </div>
                                    <InertiaLink className={`bold-font`}
                                                 href={route(props.links.show_organization, {organization: organization.id})}>
                                        {organization.name}
                                    </InertiaLink>

                                </div>
                            </div>
                        </>))}
                    </div>
                }
                {props.events.length !== 0 && <>
                    <div className="container-data-header-dash">
                        <div className="rt-dash-title pending">
                            <h4>Upcoming events</h4>
                        </div>
                        <div className="container-data-header-buttons">

                            <InertiaLink
                                className={'btn-tertiary-xs'}
                                href={props.links.all_events}>See all events
                            </InertiaLink>
                        </div>
                    </div>

                    <div className="datatable datatable-dashboard">
                        {props.events.length !== 0 && <div className='row'>
                            <div className='col-12'>
                                <DataTable
                                    className={"-striped -highlight double-row"}
                                    columns={columns}
                                    ref={tableRef}
                                    fetchUrl={links.get_upcoming_events}
                                    initialState={{
                                        pageSize: 50, hiddenColumns: ['id'], sortBy: [{id: 'id', desc: true}],
                                    }}
                                />
                            </div>
                        </div>}
                    </div>
                </>}


            </div>
        </div>
    </Layout>)
}

