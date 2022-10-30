import React from 'react';
import ReactTable from 'react-table';

export default function DataTableSimplified(props) {
    const {data, columns, title, tableHeaderLink, dashState} = props;

    const headerTitle = (title, dashState = '') => {

        return (
            <div className={'rt-thead rt-dash'}>
                <div className={`rt-dash-title ${dashState}`}>
                    <h4>{title}</h4>
                </div>
                {!!tableHeaderLink &&
                    <div className="rt-dash-link">
                        {tableHeaderLink}
                    </div>
                }
            </div>
        )
    }

    return (
        <div className="datatable datatable-dashboard">
            <div className="block-container">
                {data.length !== 0 &&
                    <ReactTable
                        data={data}
                        columns={columns}
                        TheadComponent={
                            _ => headerTitle(title, dashState)
                        }
                        showPagination={false}
                        className="-striped-inverse -highlight -hide-paging"
                        defaultPageSize={data.length ? data.length : 3}
                    />
                }
            </div>
        </div>
    )

}
