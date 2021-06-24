create schema BDR;

create table BDR.users(
  uid serial primary key,
  login varchar not null,
  password text not null,
  enable boolean not null default false,
  created_at date,
  updated_at date
);

create table BDR.profiles(
  uid serial primary key,
  name varchar not null,
  email varchar not null,
  document varchar,
  enable boolean not null default false,
  created_at date,
  updated_at date,
  user_uid integer not null references BDR.users (uid)
);

create table BDR.types(
  uid serial primary key,
  title varchar not null,
  description varchar not null,
  enable boolean not null default false,
  created_at date,
  updated_at date
);

create table BDR.tasks(
  uid serial primary key,
  title varchar not null,
  description varchar not null,
  status varchar not null,
  enable boolean not null default false,
  created_at date,
  updated_at date,
  user_uid integer not null references BDR.users (uid),
  type_uid integer not null references BDR.types (uid)
);

create table BDR.files(
  uid serial primary key,
  title varchar not null,
  url varchar not null,
  enable boolean not null default false,
  created_at date,
  updated_at date
);

create table BDR.task_files(  
  task_uid integer not null references BDR.tasks (uid),
  file_uid integer not null references BDR.files (uid),
  created_at date,
  updated_at date,
  primary key (task_uid, file_uid)
);
