import React, {useMemo, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {DataTable, ReactModal, SelectColumnFilter} from '../../components'
// import CreateUserModal from './components/CreateUserModal'
import {InertiaLink, usePage} from '@inertiajs/inertia-react'
// import UpdatePasswordModal from './components/UpdatePasswordModal'
import Layout from '../../components/Shared/Layout'
import {IconDelete, IconPen, IconShape} from "../../components/Icons/Icons";
import {route} from "../../utils";
import {useToasts} from "react-toast-notifications";
import {CATEGORIES, ROLE} from "../../components/Shared/Constants";
import IconTrash from "../../components/Icons/IconTrash";
import DeleteAccount from "../User/components/DeleteAccount";
import DeleteActivity from "./DeleteActivity";


const Index = (props) => {
    const {t} = useTranslation()
    const modalRef = useRef()
    const tableRef = useRef()
    const {links, categories, auth} = props
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
                // Cell: ({ row }) => {return row.original.user.login}
            }
            ] : []),

        {
            id: 'city',
            Header: 'City',
            accessor: 'city',
            name: 'city',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true,

        },
        {
            id: 'email',
            Header: 'Email',
            accessor: 'email',
            name: 'email',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true
        },
        {
            id: 'facebook',
            Header: 'Facebook link',
            accessor: 'facebook',
            name: 'facebook',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true
        },

        // {
        //     id: 'actions',
        //     Header: 'Actions',
        //     accessor: 'actions',
        //     name: 'actions',
        //     search: {value: '', regex: 'false'},
        //     orderable: false,
        //     disableSortBy: true,
        //     searchable: false,
        //     disableFilters: true,
        //     Cell: ({row}) => {
        //         return (
        //             <>
        //                 <div className="rt-btn-wrapper">
        //                     <InertiaLink className="btn-stripped"
        //                                  href={route(links.show, {activity: row.original.id})}>
        //                         <IconShape/>
        //                     </InertiaLink>
        //                     <InertiaLink className="btn-stripped"
        //                                  href={route(links.edit, {activity: row.original.id})}>
        //                         <IconPen/>
        //                     </InertiaLink>
        //                     <button
        //                         className="btn-stripped-sm"
        //                         onClick={() => handleDeleteAccount(row.original.id)}>
        //                         <IconTrash/>
        //                     </button>
        //                 </div>
        //             </>
        //         )
        //     }
        // }

    ], [])

    return (
        <Layout {...props}>
            <div className="container-data profile">
                <div className="container-data-header">
                    <h5>Organizations</h5>

                    <div className="container-data-header-buttons">
                        {isAdmin &&
                        <InertiaLink className="btn-primary" href={props.links.create}>
                            Create an organization
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
                                pageSize: 50
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
