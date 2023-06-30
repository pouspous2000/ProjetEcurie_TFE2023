import { useState } from "react";
import { Nav, Container, Row, Col, Navbar } from "react-bootstrap";
import styles from './NavbarSidebar.module.css';
import Stack from 'react-bootstrap/Stack';
import { categories, subCategories } from './Component/Admin';

function NavbarSidebar() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [activeSubCategory, setActiveSubCategory] = useState(
        subCategories.find((subCategory) => subCategory.categorie === categories[0].id)?.id
    );

    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        const defaultSubCategory = subCategories.find((subCategory) => subCategory.categorie === categoryId)?.id;
        setActiveSubCategory(defaultSubCategory);
    };

    const handleSubCategoryClick = (subCategoryId) => {
        setActiveSubCategory(subCategoryId);
    };

    const renderSubCategories = () => {
        const subCategoryList = subCategories.filter(
            (subCategory) => subCategory.categorie === activeCategory
        );
        return (
      
              
                    <Nav className={`col-2 col-sm-2 col-md-2 col-lg-1 justify-content-center mr-auto ${styles.sidebarStyle}`}>
                        <Stack gap={3} style={{ fontSize: '20px' }} className="p-2">
                            {categories.filter((categoryFilter) => categoryFilter.id === activeCategory).map((categoryMap) =>
                                <div style={{ marginLeft: 'auto', marginRight: 'auto' }} key={categoryMap.id}>
                                    {categoryMap.name}
                                </div>
                            )}
                            {subCategoryList.map((subCategory) => (
                                <Nav.Item key={subCategory.id}>
                                    <div
                                        className={`${activeSubCategory === subCategory.id ? 'active' : ''} ${styles.button} p-2`}
                                        onClick={() => handleSubCategoryClick(subCategory.id)}
                                    >
                                        {subCategory.id}
                                    </div>
                                </Nav.Item>
                            ))}
                        </Stack>
                    </Nav>
        );
    };


    //       <Nav className="mr-auto">
    //         {/* Vos éléments de navigation ici */}
    //       </Nav>

    const renderContent = () => {
        const subCategoryContent = subCategories.find(
            (subCategory) =>
                subCategory.categorie === activeCategory && subCategory.id === activeSubCategory
        );
        return (
            <div className="col-9 col-sm-9 col-md-9 col-lg d-flex justify-content-center align-items-center">
                {subCategoryContent && subCategoryContent.id === activeSubCategory && (
                    <div>{subCategoryContent.content}</div>
                )}
            </div>
        );
    };

    return (
        <>

            <Nav className={`justify-content-center grid text-center ${styles.navbarStyle}`}>

                {categories.map((category) => (
                    <Nav.Item key={category.id} className={styles.iconeStyle}>
                        <button
                            className={`${styles.iconeStyle} ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <i className={category.icone}></i>
                        </button>
                    </Nav.Item>
                ))}
            </Nav>
            <Container>
                <Row className="d-flex">
                    <Col xs={3} sm={2} md={2} lg={1} className="w-1 p-0">
                        {renderSubCategories()}
                    </Col>
                    <Col className="w-1 p-3">
                        {renderContent()}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NavbarSidebar;
