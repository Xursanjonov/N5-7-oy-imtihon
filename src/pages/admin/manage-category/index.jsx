import React, { Fragment, memo, useState } from 'react'
import { useGetCategoryQuery } from '../../../context/api/categoryApi'
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6'
import Modal from '../../../components/modal'
import UpdateCategory from '../../../components/update/UpdateCategory'
import DeleteCategory from '../../../components/delete/DeleteCategory'
import './manage-category.scss'

const ManageCategory = () => {
    const { data } = useGetCategoryQuery()
    const [show, setShow] = useState(false)
    const [delOpen, setDelOpen] = useState(false)

    return (
        <div className='manage-category'>
            <h1 className='manage__content-h1'>Manage Category</h1>
            <ul className='manage-category__content'>
                {data?.map(category => (
                    <Fragment>
                        <li className='manage-category__content-item'>
                            <span className='manage-category__content-item-name'> {category?.id}. {category.name}</span>
                            <div className='admin__btns'>
                                <button onClick={() => setDelOpen(category?.id)} className='admin__btns-item'>
                                    <FaTrashCan color='white' fontSize={16} />
                                </button>
                                <button onClick={() => setShow(category)} className='admin__btns-item'>
                                    <FaPenToSquare color='white' fontSize={16} />
                                </button>
                            </div>
                        </li>
                    </Fragment>
                ))}
            </ul>
            {show ? <Modal close={setShow} title={'Update Category'} >
                <UpdateCategory category={show} setOpen={setShow} />
            </Modal> : <></>}
            {delOpen ? <Modal close={setDelOpen} title={'Delete Category'}>
                <DeleteCategory categoryId={delOpen} setOpen={setDelOpen} />
            </Modal> : <></>}
        </div>
    )
}

export default memo(ManageCategory)