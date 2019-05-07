<template>
    <div class="sidebar-nav"
         v-theme:border.right
         v-bar>
        <div class="wrapper">
            <div class="group"
                 v-for="group of list"
                 :key="group.title">
                <div class="group-title"
                     v-theme:color="15">{{group.title}}</div>
                <div class="primarys">
                    <div class="primary"
                         v-for="primary of group.children"
                         :key="primary.name">
                        <span class="primary-link"
                              :class="{active:calcActive(primary.name)}"
                              v-theme:color="2"
                              v-theme:color.hover
                              v-theme:background.active="32"
                              @click="$router.replace({name:`${primary.name}`})">
                            {{primary.label}}
                        </span>
                        <div class="secondaries"
                             v-if="primary.children && primary.children.length">
                            <div class="secondary"
                                 v-for="secondary of primary.children"
                                 :key="secondary.name"
                                 v-theme:color="2"
                                 v-theme:color.hover
                                 v-theme:background.active="32">
                                <span class="secondary-link"
                                      :class="{active:calcActive(secondary.name)}"
                                      @click="handleClick(secondary.name)"
                                      v-theme:color.active="15">
                                    {{secondary.label}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";

    interface SidebarNavListItem {
        name: string;
        route: string;
        children?: SidebarNavListItem[];
    }

    interface SidebarNavListGroup {
        title: string;
        children: SidebarNavListItem;
    }



    @Component
    export default class SidebarNav extends Vue {

        @Prop({})
        list!: SidebarNavListGroup[]

        get routeName() {
            return this.$route.name;
        }

        calcActive(routeName: string) {
            const { matched } = this.$route;

            const search = matched.filter(item => item.name === routeName);

            if (search.length) return true;
            else return false;
        }

        handleClick(routeName: string) {
            this.$router.push({ name: routeName });

            // this.$router.push({ name: 'document-global-storage' })
        }
    }



</script>
<style lang="scss" scoped>
    .sidebar-nav {
        width: 100%;
        height: 100%;

        .wrapper {
            .group {
                padding: 32px 0 0;

                .group-title {
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 32px;
                    padding-left: 24px;
                }

                .primarys {
                    .primary {
                        font-size: 16px;

                        cursor: pointer;
                        .primary-link {
                            display: block;
                            padding-left: 32px;
                            line-height: 48px;
                            &.active + .secondaries {
                                display: block;
                            }
                        }

                        .secondaries {
                            display: none;
                            .secondary {
                                .secondary-link {
                                    font-size: 14px;
                                    display: block;
                                    padding-left: 48px;
                                    line-height: 32px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
