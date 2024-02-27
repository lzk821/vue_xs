import { getmbxAPI } from '@/apis/category';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate} from 'vue-router'
export function useCategory() {
    const router = useRoute()
    const categoryData = ref({})
    const getCategory = async (id = router.params.id) => {
        const res = await getmbxAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())
    // 路由缓存解决
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}