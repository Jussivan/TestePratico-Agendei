export interface Task {
    id?: number;           // Opcional, pois é gerado automaticamente
    name: string;         // Título da tarefa
    description?: string;  // Descrição da tarefa (opcional)
    deadline?: Date;       // Prazo da tarefa (opcional, tipo datetime)
}