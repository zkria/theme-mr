const app = new Vue({
    el: '#app',
    data: {
        components: [],
        editingComponent: null,
    },
    methods: {
        async loadComponents() {
            const response = await axios.get('/admin/components');
            this.components = response.data;
        },
        
        async toggleComponent(component) {
            await axios.post(`/admin/components/${component.id}/toggle`);
            await this.loadComponents();
        },
        
        async updateComponent(component) {
            await axios.put(`/admin/components/${component.id}`, component);
            await this.loadComponents();
        }
    },
    mounted() {
        this.loadComponents();
    }
}); 