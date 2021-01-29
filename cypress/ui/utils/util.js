export default class Util {

    submitTodo(todoDescription){
        cy.get('input[data-id="input.text.description"]').type(todoDescription).should('have.value', todoDescription)
        cy.get('button[type="submit"]').click()// this line trigger an error
    }

    verifyTodoIsCreated(todoNumber, todoDescription){
        cy.get('li[data-id="todo-' + todoNumber + '"]').invoke('text').should('include', todoDescription)
    }

    completeTodo(todoNumber){
        cy.get('input[data-id="input.checkbox.done-' + todoNumber + '"]').check() // this line trigger an error
    }

    verifyTodoIsCompleted(todoNumber){
        cy.get('input[data-id="input.checkbox.done-' + todoNumber + '"]').should('be.checked')
    }

    verifyTodoIsNotCompleted(todoNumber){
        cy.get('input[data-id="input.checkbox.done-' + todoNumber + '"]').should('not.be.checked')
    }

}