<template>
  <div>
    <a-input-search
      placeholder="Поиск сделок"
      enter-button="Search"
      @search="onSearch"
    />
    <a-table :columns="columns" :dataSource="leads" rowKey="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

interface PipelineStatus {
  [key: string]: { name: string };
}

interface Users {
  [key: string]: { name: string };
}

export default defineComponent({
  setup() {
    const leads = ref([]);
    const pipelines = ref<PipelineStatus>({});
    const users = ref<Users>({});
    const columns = [
      {
        title: "Название",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Бюджет",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Статус",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "Ответственный",
        dataIndex: "responsible",
        key: "responsible",
      },
    ];

    const fetchLeads = async (query = "") => {
      try {
        const leadsResponse = await axios.get(`/api/leads?query=${query}`);
        leads.value = leadsResponse.data._embedded.leads.map((lead: any) => ({
          ...lead,
          status: pipelines.value[lead.status_id]?.name || lead.status_id,
          responsible:
            users.value[lead.responsible_user_id]?.name ||
            lead.responsible_user_id,
        }));
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    const fetchPipelines = async () => {
      try {
        const pipelinesResponse = await axios.get(`/api/pipelines`);
        const pipelinesData = pipelinesResponse.data._embedded.pipelines;
        pipelines.value = {};
        pipelinesData.forEach((pipeline: any) => {
          pipeline._embedded.statuses.forEach((status: any) => {
            pipelines.value[status.id] = { name: status.name };
          });
        });
      } catch (error) {
        console.error("Error fetching pipelines:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const usersResponse = await axios.get(`/api/users`);
        const usersData = usersResponse.data._embedded.users;
        users.value = {};
        usersData.forEach((user: any) => {
          users.value[user.id] = { name: user.name };
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const onSearch = (value: string) => {
      fetchLeads(value);
    };

    onMounted(() => {
      fetchPipelines();
      fetchUsers();
      fetchLeads();
    });

    return {
      leads,
      columns,
      onSearch,
    };
  },
});
</script>
