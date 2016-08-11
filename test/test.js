import test from 'ava';
import ws from '../';

test('Testing functionality', t => {
	var string = 'Hello World! Hello World! Hello World!';
	var x = ws(string);
	t.is(x.stats.totalWords, 6, 'Total words!');
	t.is(x.stats.totalUniqueWords, 2, 'Total unique words!');
	t.is(x.words.hello, 3, 'Word number of iterations');

	string = 	"Chris: Hello!" +
				"Mark: Hello! What are you doing?" +
				"Chris: I'm catching some Pokémons.";
	x = ws(string);
	t.is(x.stats.totalWords, 13, 'Total words!');
	t.is(x.stats.totalUniqueWords, 11, 'Total unique words!');
	t.is(x.words.hello, 2, 'Word number of iterations');
	t.is(x.words["i'm"], 1, 'Word number of iterations');

	string = "Hello. hello!";
	x = ws(string, true);
	t.is(x.stats.totalWords, 2, 'Total words (case sensitive)!');
	t.is(x.stats.totalUniqueWords, 2, 'Total unique words (case sensitive)!');
});
