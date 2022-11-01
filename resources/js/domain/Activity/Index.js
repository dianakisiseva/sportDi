import React, {useMemo, useRef} from 'react'
import {DataTable, ReactModal} from '../../components'
import {InertiaLink} from '@inertiajs/inertia-react'
import Layout from '../../components/Shared/Layout'
import {IconDeleteBin, IconPen, IconShape} from "../../components/Icons/Icons";
import {route} from "../../utils";
import {useToasts} from "react-toast-notifications";
import {CATEGORIES, ROLE} from "../../components/Shared/Constants";
import DeleteActivity from "./DeleteActivity";


const Index = (props) => {
    const modalRef = useRef()
    const tableRef = useRef()
    const {links, auth} = props
    const {addToast} = useToasts()
    const isAdmin = auth.user.role_id === ROLE.ADMIN;

    const handleDeleteAccount = (id) => {
        const title = 'Delete activity'

        const body =
            <DeleteActivity
                cancelCallback={handleDeleteAccountCancelCallback}
                successCallback={handleDeleteAccountSuccessCallback}
                id={id}
            />

        modalRef.current.setContent(title, body)
    }

    const handleDeleteAccountCancelCallback = () => {
        modalRef.current.close()
    }

    const handleDeleteAccountSuccessCallback = (res) => {
        modalRef.current.close()
        tableRef.current.reload()
        addToast('Activity successfully deleted', {appearance: 'success'})

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
        ...(isAdmin ? [
            {
                id: 'login',
                Header: 'User login',
                accessor: 'login',
                name: 'login',
                search: {value: '', regex: 'false'},
                orderable: true,
                disableSortBy: false,
                searchable: false,
                disableFilters: true,
                Cell: ({ row }) => {return row.original.user.login}
            }
            ] : []),

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
            Cell: ({ value }) => {return CATEGORIES[value]}

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
            id: 'distance',
            Header: 'Distance',
            accessor: 'distance',
            name: 'distance',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true
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
                                         href={route(links.show, {activity: row.original.id})}>
                                <IconShape/>
                            </InertiaLink>
                            <InertiaLink className="btn-stripped"
                                         href={route(links.edit, {activity: row.original.id})}>
                                <IconPen/>
                            </InertiaLink>
                            <button
                                className="btn-stripped"
                                onClick={() => handleDeleteAccount(row.original.id)}>
                                <IconDeleteBin/>
                            </button>
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
                    {isAdmin ?
                        <h5>All activities</h5> :
                        <h5>My activities</h5>
                    }
                    <div className="container-data-header-buttons">
                        {!isAdmin &&
                        <InertiaLink className="btn-primary" href={props.links.create}>
                            Add activity
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
                                    { id: 'id', desc: true }
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
