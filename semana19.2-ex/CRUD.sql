create schema semana19;

create table semana19.categoria (
  uid serial primary key,
  nome varchar not null,
  descricao varchar not null,
  tag varchar not null
);

create table semana19.produto (
  uid serial primary key,
  nome varchar not null,
  descricao varchar not null,
  categoria_uid integer not null references semana19.categoria (uid)
);

create table semana19.estoque (
  uid serial primary key,
  quantidade integer not null,
  produto_uid integer not null references semana19.produto (uid)
);
