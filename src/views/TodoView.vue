<script setup>
import Todoitem from '../components/Todoitem.vue'
import { ref ,watch,computed} from 'vue';
import { Icon } from '@iconify/vue';
import { uid } from "uid";
import TodoCreator from '../components/TodoCreator.vue';
const todoList = ref([])
watch(todoList,()=>{
  saveLocals(); 
},{
  deep:true
})

const createTodo =(todo)=>{
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted:false,
    isEditing:null
  });
  
};
const todoCompleted =computed(()=>{
  return todoList.value.every((todo)=>todo.isCompleted);
})
function toggleTodoComplete(index){
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
  
}
function editTodo(index){
  todoList.value[index].isEditing = !todoList.value[index].isEditing;
  
}
function editDone(index){
  todoList.value[index].isEditing = !todoList.value[index].isEditing;
  
}
function updateValue(vale,index){
  todoList.value[index].todo = vale;
}
function deletTodo (index){
  todoList.value.splice(index,1);
}

function saveLocals(){
  localStorage.setItem("todoList",JSON.stringify(todoList.value))
};

function getLocals(){
  if(localStorage.getItem("todoList")){
    todoList.value = JSON.parse(localStorage.getItem("todoList"))
  }
}
getLocals();
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo"/>

    <ul class="todo-list" v-if="todoList.length> 0" >
      <Todoitem 
      v-for="(todo, index) in  todoList" 
      :index="index" 
      :key="todo.todo" 
      :todo="todo"
      @toggle-complete="toggleTodoComplete"
      @edit-todo="editTodo"
      @edit-done ="editDone"
      @update="updateValue"
      @delete-todo="deletTodo"
      />
    </ul>
    <p v-else class="todos-msg">
      <Icon icon="noto-v1:sad-but-relieved-face"  width="22" height="22" />
      <span>There are no todos! Add one</span>
    </p>
    <p v-if="todoCompleted &&  todoList.length > 0" class="todos-msg">
      <Icon icon="noto-v1:party-popper" />
      <span>You  have completed all your todos</span>
    </p>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>
