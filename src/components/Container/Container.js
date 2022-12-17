const Container = () => {
  return (
    <div class="wrapper">
      <div class="task-input">
        <i class="uil-align-left"></i>
        <input class="input-task-input" id="input-task-input" type="text" placeholder="Add new task" value=""></input>
      </div>
      <div class="controls">
        <div class="filters">
          <span id="all" class="active">All</span>
          <span id="pending">Pending</span>
          <span id="completed">Completed</span>
        </div>
      </div>
      <ul class="task-box pending">

      </ul>
      <div class=""></div>
      <ul class="task-box completed">

      </ul>
      <button class="clear-btn clear-tasks">Clear all</button>
    </div>
  );
}

export default Container;