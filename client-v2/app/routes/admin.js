import DashboardPage from '../containers/AdminDashboard/Loadable';
import RoleManagePage from '../containers/AdminRoleManagePage/Loadable';
import RoleManageEditPage from '../containers/AdminRoleManagePage/AddEditPage/Loadable';
import ModuleManagePage from '../containers/AdminModuleManagePage/Loadable';
import ModuleManageEditPage from '../containers/AdminModuleManagePage/AddEditPage/Loadable';
import ModuleAccessManagePage from '../containers/AdminModuleManagePage/AccessManagePage/Loadable';
import UserManagePage from '../containers/AdminUserManagePage/Loadable';
import UserManageEditPage from '../containers/AdminUserManagePage/AddEditPage/Loadable';
import ContentManagePage from '../containers/AdminContentListingPage/Loadable';
import ContentManageAddEdit from '../containers/AdminContentListingPage/AddEditPage/Loadable';
import FaqManagePage from '../containers/FAQManagePage/Loadable';
import FaqManageAddEdit from '../containers/FAQManagePage/AddEditPage';
import MediaManagePage from '../containers/AdminMediaManagePage/Loadable';
import SliderManagePage from '../containers/AdminSliderManagePage/Loadable';
import SliderManageAddEdit from '../containers/AdminSliderManagePage/AddEditPage/Loadable';
import BlogManagePage from '../containers/AdminBlogManagePage/Loadable';
import BlogManageAddEdit from '../containers/AdminBlogManagePage/AddEditPage/Loadable';

const routes = [
  {
    path: '/admin/dashboard',
    component: DashboardPage,
  },
  {
    path: '/admin/role-manage',
    component: RoleManagePage,
    exact: true,
  },
  {
    path: '/admin/role-manage/edit/:id',
    component: RoleManageEditPage,
    exact: true,
  },
  {
    path: '/admin/role-manage/add',
    component: RoleManageEditPage,
    exact: true,
  },
  {
    path: '/admin/content-manage/edit/:id',
    component: ContentManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/content-manage/add',
    component: ContentManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/content-manage',
    component: ContentManagePage,
    exact: true,
  },
  {
    path: '/admin/module-manage',
    component: ModuleManagePage,
    exact: true,
  },
  {
    path: '/admin/module-manage/edit/:id',
    component: ModuleManageEditPage,
    exact: true,
  },
  {
    path: '/admin/module-manage/add',
    component: ModuleManageEditPage,
    exact: true,
  },
  {
    path: '/admin/module-manage/access/:id',
    component: ModuleAccessManagePage,
    exact: true,
  },
  {
    path: '/admin/user-manage',
    component: UserManagePage,
    exact: true,
  },
  {
    path: '/admin/user-manage/edit/:id',
    component: UserManageEditPage,
    exact: true,
  },
  {
    path: '/admin/user-manage/add',
    component: UserManageEditPage,
    exact: true,
  },
  {
    path: '/admin/faq-manage/edit/:id',
    name: 'FAQ Manage',
    component: FaqManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/faq-manage/add',
    name: 'FAQ Manage',
    component: FaqManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/faq-manage',
    name: 'FAQ Manage',
    component: FaqManagePage,
    exact: true,
  },
  {
    path: '/admin/media-manage',
    component: MediaManagePage,
  },
  {
    path: '/admin/slider-manage/edit/:id',
    component: SliderManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/slider-manage/add',
    component: SliderManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/slider-manage',
    component: SliderManagePage,
    exact: true,
  },
  {
    path: '/admin/blog-manage/edit/:id',
    component: BlogManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/blog-manage/add',
    component: BlogManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/blog-manage',
    component: BlogManagePage,
    exact: true,
  },
];

export default routes;
