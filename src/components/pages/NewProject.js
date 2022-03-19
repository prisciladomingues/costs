import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm />
      </h1>
    </div>
  )
}

export default NewProject;
