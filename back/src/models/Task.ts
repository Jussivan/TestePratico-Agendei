export interface Task {
    id?: number;           // Opcional, pois é gerado automaticamente
    name: string;         // Título da tarefa
    description?: string;  // Descrição da tarefa (opcional)
    createdAt?: Date;      // Data de criação (opcional, padrão: agora)
}