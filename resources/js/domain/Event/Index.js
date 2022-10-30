import React, {useMemo, useRef} from 'react'
import {DataTable, ReactModal, SelectColumnFilter} from '../../components'
import {InertiaLink} from '@inertiajs/inertia-react'
import Layout from '../../components/Shared/Layout'
import {IconDeleteBin, IconPen, IconShape} from "../../components/Icons/Icons";
import {route} from "../../utils";
import {useToasts} from "react-toast-notifications";
import {CATEGORIES, ROLE} from "../../components/Shared/Constants";
import IconTrash from "../../components/Icons/IconTrash";
import DeleteEvent from "./DeleteEvent";


const Index = (props) => {
    const modalRef = useRef()
    const tableRef = useRef()
    const {links, events, auth, categories} = props
    const {addToast} = useToasts()
    const isOrganization = auth.user.role_id === ROLE.ORGANIZATION;

    const handleDeleteEvent = (id) => {
        const title = 'Delete event'

        const body =
            <DeleteEvent
                cancelCallback={handleDeleteEventCancelCallback}
                successCallback={handleDeleteEventSuccessCallback}
                id={id}
            />

        modalRef.current.setContent(title, body)
    }

    const handleDeleteEventCancelCallback = () => {
        modalRef.current.close()
    }

    const handleDeleteEventSuccessCallback = (res) => {
        modalRef.current.close()
        tableRef.current.reload()
        addToast('Event successfully deleted', {appearance: 'success'})

    }

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
            disableFilters: true
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
            id: 'category_id',
            Header: 'Category',
            accessor: 'category_id',
            name: 'category_id',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true,
            // filterComponent: SelectColumnFilter,
            // filterSettings: {
            //     options: categories
            // },
            Cell: ({ value }) => {return CATEGORIES[value]}
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
            Cell: ({ value, row }) => {
                return (
                    <InertiaLink className={`bold-font`}
                                 href={route(links.showOrganization,
                                     { organization: row.original.organization.id })}
                    >
                        {value}
                    </InertiaLink>
                )
            }
        },
        {
            id: 'actions',
            Header: 'Actions',
            accessor: 'actions',
            name: 'actions',
            search: {value: '', regex: 'false'},
            orderable: false,
            disableSortBy: true,
            searchable: false,
            disableFilters: true,
            Cell: ({row}) => {
                return (
                    <>
                        <div className="rt-btn-wrapper">
                            <InertiaLink className="btn-stripped"
                                         href={route(links.show, {event: row.original.id})}>
                                <IconShape/>
                            </InertiaLink>
                            {auth.user.role_id === ROLE.ADMIN ||
                                auth.user.email === row.original.organization.email && <>
                            <InertiaLink className="btn-stripped"
                                         href={route(links.edit, {event: row.original.id})}>
                                <IconPen/>
                            </InertiaLink>
                            <button
                                className="btn-stripped"
                                onClick={() => handleDeleteEvent(row.original.id)}>
                                <IconDeleteBin/>
                            </button>
                            </>
                            }
                        </div>
                    </>
                )
            }
        }

    ], [])

    return (
        <Layout {...props}>
            <div className="container-data profile">
                <div className="container-data-header">
                    <h5>Events</h5>
                    <div className="container-data-header-buttons">
                        {isOrganization &&
                        <InertiaLink className="btn-primary" href={props.links.create}>
                            Add event
                        </InertiaLink>
                        }
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <DataTable
                            className={"-striped -highlight double-row"}
                            columns={columns}
                            ref={tableRef}
                            fetchUrl={links.get}
                            initialState={{
                                pageSize: 50,
                                hiddenColumns: ['id'],
                                sortBy: [
                                    { id: 'date', asc: true }
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>

            <ReactModal ref={modalRef}/>
        </Layout>
    )
}

export default Index
