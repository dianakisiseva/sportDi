import React, {useMemo, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {DataTable, ReactModal} from '../../components'
import CreateUserModal from './components/CreateUserModal'
import {InertiaLink, usePage} from '@inertiajs/inertia-react'
// import UpdatePasswordModal from './components/UpdatePasswordModal'
import Layout from '../../components/Shared/Layout'
import {IconDelete, IconPen, IconShape} from "../../components/Icons/Icons";
import {route} from "../../utils";
import DeleteAccount from "./components/DeleteAccount";
import IconTrash from "../../components/Icons/IconTrash";
import {useToasts} from "react-toast-notifications";
import {Inertia} from "@inertiajs/inertia";
// import DeleteUserModal from './components/DeleteUserModal'

const Index = (props) => {
    const {t} = useTranslation()
    const modalRef = useRef()
    const tableRef = useRef()
    const {links} = props
    const {addToast} = useToasts()


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
            id: 'first_name',
            Header: 'First name',
            accessor: 'first_name',
            name: 'first_name',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true
        },
        {
            id: 'last_name',
            Header: 'Last name',
            accessor: 'last_name',
            name: 'last_name',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true
        },
        {
            id: 'login',
            Header: 'Login',
            accessor: 'login',
            name: 'login',
            search: {value: '', regex: 'false'},
            orderable: true,
            disableSortBy: false,
            searchable: true,
            disableFilters: true
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
                                         href={route(links.show, {user: row.original.id})}>
                                <IconShape/>
                            </InertiaLink>
                            <InertiaLink className="btn-stripped"
                                         href={route(links.edit, {user: row.original.id})}>
                                <IconPen/>
                            </InertiaLink>
                            <button
                                className="btn-stripped-sm"
                                onClick={() => handleDeleteAccount(row.original.id)}>
                                <IconTrash/>
                            </button>
                        </div>
                    </>
                )
            }
        }

    ], [])

    const handleDeleteAccount = (id) => {
        const title = 'Delete user'

        const body =
            <DeleteAccount
                cancelCallback={handleDeleteAccountCancelCallback}
                successCallback={handleDeleteAccountSuccessCallback}
                deleteUser={true}
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
        addToast('User successfully deleted', {appearance: 'success'})

    }

    return (
        <Layout {...props}>
            <div className="container-data profile">
                <div className="container-data-header">
                    <h5>All users</h5>
                    <div className="container-data-header-buttons">
                        <InertiaLink className="btn-primary" href={props.links.create}>
                            Add user
                        </InertiaLink>
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
