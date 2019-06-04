package marvel.character

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class CharactersController (val characterRepository: CharacterRepository) {

    @GetMapping("/characters")
    fun getCharacters (): List<Character>? {
        return characterRepository.getAll()
    }
}