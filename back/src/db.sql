CREATE TABLE Tasks (
    id SERIAL PRIMARY KEY,          -- ID automático (incrementado a cada inserção)
    name VARCHAR(255) NOT NULL,     -- Nome da tarefa (obrigatório)
    description TEXT,               -- Descrição da tarefa (opcional)
    deadline TIMESTAMP              -- Prazo da tarefa (opcional, tipo datetime)
);