export default class Path {
    static BASE = '/:locale'

    static HOME = `${Path.BASE}/home`;
    static ABOUT = `${Path.BASE}/about`;
    static SERVICES = `${Path.BASE}/services`;
    static PROJECTS = `${Path.BASE}/projects`;
    static CONTACT = `${Path.BASE}/contact`;
    static NEWS = `${Path.BASE}/news`;
    static PRODUCTS = `${Path.BASE}/products`

    static BLOG_DETAIL = `${Path.BASE}/blog/:id`

}