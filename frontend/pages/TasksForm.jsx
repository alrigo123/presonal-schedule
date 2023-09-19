import Link from 'next/link'
import React from 'react'

const TasksForm = () => {

    return (
        <div>
            <h2>TASK FORM PAGES</h2>
            <form>
                <Link href="/">
                    <button type="button">Go to Tasks Chart</button>
                </Link>
            </form>
        </div>

    )
}

export default TasksForm
