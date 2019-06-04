package marvel.character

import com.beust.klaxon.Klaxon
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.stereotype.Repository
import org.springframework.web.client.RestTemplate

const val MARVEL_ENDPOINT = "http://gateway.marvel.com/v1/public"
const val API_KEY = "00ce23dba92b8dc31a49a31e4ca5a998"
const val HASH = "48d69bfd45419400f41488d6c633400a"

@Repository
class CharacterRepository(val template: RestTemplate) {
    fun getAll() : List<Character>?{
        val url = "$MARVEL_ENDPOINT/characters?ts=1&apikey=$API_KEY&hash=$HASH"
        val response = template.getForEntity(url, String::class.java)
        val mapper = ObjectMapper()
        val root = mapper.readTree(response.body)
        val results = root.at("/data/results")
        val result = Klaxon()
                .parseArray<Character>(results.toString()
                )
        return result
    }
}