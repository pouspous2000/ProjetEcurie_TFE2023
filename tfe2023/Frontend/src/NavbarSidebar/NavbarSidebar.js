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
            <Nav className={`col-3 col-sm-2 col-md-2 col-lg-2 ${styles.sidebarStyle}`}>
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

    const renderContent = () => {
        const subCategoryContent = subCategories.find(
            (subCategory) =>
                subCategory.categorie === activeCategory && subCategory.id === activeSubCategory
        );
        return (
            <div className="container-fluid d-flex flex-column">
                <div className="row">
                    {subCategoryContent && subCategoryContent.id === activeSubCategory && (
                        <div className="col-12 p-0">{subCategoryContent.content}</div>
                    )}
                </div>
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

            <div className="container-fluid min-vh-100 d-flex flex-column">
                <div className="row flex-grow-1">
                    {renderSubCategories()}

                    <div className="col p-0">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarSidebar;