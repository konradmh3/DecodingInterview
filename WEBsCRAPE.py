import requests
from bs4 import BeautifulSoup

url = "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

valid_characters = []
for code in soup.find_all('code'):
    for div in code.find_all('div'):
        for span in div.find_all('span'):
                for i in span.find_all('i'):
                    valid_characters.append(i['value'])
                    print(valid_characters)

# Joining the valid characters to form the URL
decoded_url = ''.join(valid_characters)
print(decoded_url)

# found answer: (bonfire)
# https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/626f6e






