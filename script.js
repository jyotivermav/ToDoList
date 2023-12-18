window.addEventListener('load', () => {
	const form = document.querySelector("#form");
	const input = document.querySelector("#input");
	const List = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task1 = document.createElement('div');
		task1.classList.add('task');

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');

		task1.appendChild(taskContent);

		const taskInput = document.createElement('input');
		taskInput.classList.add('text');
		taskInput.type = 'text';
		taskInput.value = task;
		taskInput.setAttribute('readonly', 'readonly');

		taskContent.appendChild(taskInput);

		const taskAction = document.createElement('div');
		taskAction.classList.add('actions');
		
		const taskEdit = document.createElement('button');
		taskEdit.classList.add('edit');
		taskEdit.innerText = 'Edit';

		const taskDelete = document.createElement('button');
		taskDelete.classList.add('delete');
		taskDelete.innerText = 'Delete';

		taskAction.appendChild(taskEdit);
		taskAction.appendChild(taskDelete);

		task1.appendChild(taskAction);

		List.appendChild(task1);

		input.value = '';

		taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerText.toLowerCase() == "edit") {
				taskEdit.innerText = "Save";
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				taskEdit.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly");
			}
		});

		taskDelete.addEventListener('click', (e) => {
			List.removeChild(task1);
		});
	});
});