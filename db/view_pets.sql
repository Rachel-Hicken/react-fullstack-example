SELECT p.pet_id, p.pet_name, s.species_name, p.pet_age
FROM species s
JOIN pets p ON s.species_id = p.species_id;
