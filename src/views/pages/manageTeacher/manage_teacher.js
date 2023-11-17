import React, { useState, useRef, useEffect } from 'react'
import {
    CTable,
    CCardHeader,
    CCardBody,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CRow,
    CCol,
    CCard,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CButton,
    CModalFooter,
    CModalBody,
    CModalTitle,
    CModalHeader,
    CModal
} from '@coreui/react'
import axios from 'axios';

const ManageTeacher = () => {
    const apiUrl = process.env.API_URL;

    const headerRef = useRef(null);

    const [idItem, setIdItem] = useState('');

    const [isShowForm, setIsShowForm] = useState(false);

    const [visibleModal, setVisibleModal] = useState(false)

    const [Departments, setDepartments] = useState([]);
    const [Department, setDepartment] = useState('');

    useEffect(() => {
        axios.get(`${apiUrl}/api/Departments`)
            .then(response => {
                setDepartment(response.data[0]._id);
                setDepartments(response.data);
            })
            .catch(() => {
            });
    }, []);

    const toggleFormVisibility = () => {
        setIsShowForm(!isShowForm);
    };

    const handleAdd_Edit = () => {

    }

    const handleEditClick = (id) => {
        setIsShowForm(true);
        setIdItem(id);
        scrollToHeader();
    }

    const handleDeleteClick = () => {
        setVisibleModal(true);
    }

    const handleConfirmDelete = () => {

    }

    const scrollToHeader = () => {
        if (headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong ref={headerRef}>QUẢN LÍ GIẢNG VIÊN</strong>
                        </CCardHeader>
                        <CCardBody className='table-responsive'>
                            {
                                isShowForm ? <>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="mb-3">
                                                <CFormLabel>Tên đăng nhập</CFormLabel>
                                                <CFormInput
                                                    type="text"
                                                    placeholder="Tên đăng nhập"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <CFormLabel>Mật khẩu</CFormLabel>
                                                <CFormInput
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <CFormLabel>Xác nhận mật khẩu</CFormLabel>
                                                <CFormInput
                                                    type="password"
                                                    placeholder="Xác nhận mật khẩu"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <CFormLabel>Chức vụ</CFormLabel>
                                                <CFormSelect>
                                                    <option>Giảng Viên</option>
                                                    <option>Trưởng Bộ Môn</option>
                                                </CFormSelect>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="mb-3">
                                                <CFormLabel>Chuyên ngành</CFormLabel>
                                                <CFormSelect value={Department} onChange={(e) => {
                                                    setDepartment(e.target.value);
                                                }}>
                                                    {Departments.map(department => (
                                                        <option key={department._id} value={department._id}>{department.DepartmentName}</option>
                                                    ))}
                                                </CFormSelect>
                                            </div>
                                            <div className="mb-3">
                                                <CFormLabel>Họ và tên</CFormLabel>
                                                <CFormInput
                                                    type="text"
                                                    placeholder="Họ và tên"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <CFormLabel>Ngày sinh</CFormLabel>
                                                <CFormInput
                                                    type="date"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <CFormLabel>Email</CFormLabel>
                                                <CFormInput
                                                    type="email"
                                                    placeholder='Email'
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="mb-3">
                                                <CFormLabel>Số điện thoại</CFormLabel>
                                                <CFormInput
                                                    type="tel"
                                                    placeholder='Số điện thoại'
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <CFormLabel>Địa chỉ</CFormLabel>
                                                <CFormInput
                                                    type="text"
                                                    placeholder='Địa chỉ'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <CButton
                                            color='primary'
                                            variant="outline"
                                            onClick={handleAdd_Edit}
                                        >
                                            Thực thi
                                        </CButton>
                                        <CButton
                                            color='warning'
                                            variant="outline"
                                            onClick={toggleFormVisibility}
                                            style={{ marginLeft: 10 }}
                                        >
                                            Hủy
                                        </CButton>
                                    </div>
                                </>
                                    :
                                    <div className='mb-3'>
                                        <CButton
                                            color='success'
                                            variant="outline"
                                            onClick={toggleFormVisibility}
                                        >
                                            Thêm mới
                                        </CButton>
                                    </div>

                            }
                            <CTable bordered borderColor="primary">
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Họ và tên</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Chức vụ</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Chuyên ngành</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Ngày sinh</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Số điện thoại</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Địa chỉ</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                        <CTableDataCell>Nguyễn Đăng Quang</CTableDataCell>
                                        <CTableDataCell>Trưởng bộ môn</CTableDataCell>
                                        <CTableDataCell>Công nghệ thông tin</CTableDataCell>
                                        <CTableDataCell>19/06/1988</CTableDataCell>
                                        <CTableDataCell>quangnd@hcmute.edu.vn</CTableDataCell>
                                        <CTableDataCell>0778906767</CTableDataCell>
                                        <CTableDataCell>Cần thơ</CTableDataCell>
                                        <CTableDataCell style={{ display: 'flex' }}>
                                            <CButton
                                                className='mr-2'
                                                color='danger'
                                                variant="outline"
                                                onClick={handleDeleteClick}
                                            >
                                                Xóa
                                            </CButton>
                                            <CButton
                                                color='warning'
                                                variant="outline"
                                                onClick={() => handleEditClick(1)}
                                            >
                                                Sửa
                                            </CButton>
                                        </CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <CModal backdrop="static" visible={visibleModal} onClose={() => setVisibleModal(false)}>
                <CModalHeader>
                    <CModalTitle>Xác nhận xóa</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Bạn muốn xóa giảng viên?
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisibleModal(false)}>
                        Hủy
                    </CButton>
                    <CButton color="primary" onClick={handleConfirmDelete}>Thực thi</CButton>
                </CModalFooter>
            </CModal>
        </div>
    )
}

export default ManageTeacher
