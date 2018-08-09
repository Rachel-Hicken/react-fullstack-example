CREATE TABLE IF NOT EXISTS species
(
    species_id SERIAL PRIMARY KEY,
    species_name VARCHAR(100)
);

INSERT INTO species
(species_name)
VALUES
('Dog'),
('Cat'),
('Fish'),
('Bird'),
('Lizard'),
('Guinea Pig'),
('Emu'),
('Red Panda');


CREATE TABLE IF NOT EXISTS pets
(
    pet_id SERIAL PRIMARY KEY,
    pet_name VARCHAR(100),
    species_id INTEGER REFERENCES species(species_id),
    pet_age INTEGER
);

INSERT INTO pets
(pet_name, species_id, pet_age)
VALUES
('Ginger', 1, 10),
('Fiesty', 2, 18),
('Igor', 7, 5),
('Tika', 6, 6);