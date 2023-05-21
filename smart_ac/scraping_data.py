from bs4 import BeautifulSoup
import requests
from transformers import  pipeline
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# pretrain Model
tokenizer = AutoTokenizer.from_pretrained("sshleifer/distilbart-cnn-12-6")
model = AutoModelForSeq2SeqLM.from_pretrained("sshleifer/distilbart-cnn-12-6")

# pipeline
summarizer = pipeline(
    task="summarization", model="sshleifer/distilbart-cnn-12-6"
)


# def get_data(url):
#     headers = {'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}
#     r = requests.get(url=url, headers=headers)  
#     soup = BeautifulSoup(r.text, 'html.parser')
#     results = soup.find_all(['h1', 'p'])
#     post_title = soup.title.text
#     img_tags = soup.find_all('img', class_='ssrcss-evoj7m-Image')
#     if not img_tags:
#         img_tags = soup.find_all('img')
#     urls = [img['src'] for img in img_tags]
#     text = [result.text for result in results]
#     summary = summarization(text)
#     return summary, post_title, urls
def get_data(url):
    headers = {'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}
    r = requests.get(url=url, headers=headers)  
    soup = BeautifulSoup(r.text, 'html.parser')
    results = soup.find_all(['h1', 'p'])
    post_title = soup.title.text
    media_item = soup.find('div', class_='media__item')
    if media_item:
        img_tags = media_item.find_all('img')
        urls = [img['src'] for img in img_tags]
    else:
        img_tags = soup.find_all('img', class_='ssrcss-evoj7m-Image')
        if not img_tags:
            img_tags = soup.find_all('img')
            if len(img_tags) > 1:
                urls = [img_tags[1]['src']]
            else:
                urls = []
        else:
            urls = [img['src'] for img in img_tags]
    text = [result.text for result in results]
    summary = summarization(text)
    return summary, post_title, urls



# def get_data(url):
#     headers = {'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"}
#     r = requests.get(url=url, headers=headers)  
#     soup = BeautifulSoup(r.text, 'html.parser')
#     results = soup.find_all(['h1', 'p'])
#     post_title=soup.title.text
#     text=[result.text for result in results ]


#     summary=summarization(text)
#     return summary,post_title

def summarization(text):
    ARTICLE= ' '.join(text)

    #tokenize text into sentences
    ARTICLE = ARTICLE.replace(',', '<eos>')
    ARTICLE = ARTICLE.replace('!', '<eos>')
    ARTICLE = ARTICLE.replace('?', '<eos>')
    ARTICLE = ARTICLE.replace('\n', '<eos>')
    ARTICLE = ARTICLE.replace("\t", '<eos>')
    ARTICLE = ARTICLE.replace(' ', '<eos>')

    sentences = ARTICLE.split('<eos>')

    #sentences into smaller chunks
    max_chunk = 600
    current_chunk = 0 
    chunks = []
    for sentence in sentences:
        if len(chunks) == current_chunk + 1: 
            if len(chunks[current_chunk]) + len(sentence.split(' ')) <= max_chunk:
                chunks[current_chunk].extend(sentence.split(' '))
            else:
                current_chunk += 1
                chunks.append(sentence.split(' '))
        else:
            chunks.append(sentence.split(' '))


    for chunk_id in range(len(chunks)):
        chunks[chunk_id] = ' '.join(chunks[chunk_id])

    len(chunks[0].split((' ')))


    #text summarization 
    result = summarizer(chunks, max_length=150, min_length=50, do_sample=False)

    # ap=[]
    # for i in  result:
    #     c=i['summary_text']
    #     ap.append(c)

    # return ap
    ap = []
    for i in result:
        c = i['summary_text']
        ap.append(c)
    return ' '.join(ap)