import articles from '@/_config/articles';

const childrenList = new Array();

for (let group of articles) {
    if (group.children && group.children.length) {
        for (let item of group.children) {
            childrenList.push({
                name: item.name,
                path: item.name,
                component: () => import(`@/views/articles/${item.name}.md`)
            })
        }
    }
}

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "main" */ '@/views/index/index.vue')
    },
    {
        path: '/guide',
        name: 'guide',
        redirect: '/guide/introduction',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/guide.vue'),
        children: childrenList
    }
]

export default routes;
